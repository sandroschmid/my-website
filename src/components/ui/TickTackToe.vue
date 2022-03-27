<script setup lang="ts">
import { computed, reactive } from "vue";
import Button from "./Button.vue";
type Player = '🦸' | '🤖';
type Winner = { player: Player | undefined, boxIndices: Set<number> } | undefined;

interface Box {
  player: Player | undefined;
  index: number;
}

interface State {
  playing: boolean;
  rounds: number;
  nextPlayer: Player;
  fields: Array<Box>;
  winner: Winner;
}

const NO_PlAYER = undefined;
const HUMAN: Player = '🦸';
const CPU: Player = '🤖';
const WINNING_INDICES: Array<[number, number, number]> = [
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonal
  [2, 4, 6],
];

const state = reactive<State>({
  playing: false,
  rounds: 0,
  nextPlayer: HUMAN,
  fields: new Array(9)
    .fill(NO_PlAYER)
    .map((player, index) => ({ player, index })),
  winner: undefined,
});

function toggleGame(): void {
  state.playing = !state.playing;
  if (state.playing) {
    state.nextPlayer = HUMAN;
    restart();
  }
}

function restart(): void {
  state.playing = true;
  state.rounds = 0;
  state.fields = state.fields.map(box => ({ ...box, player: NO_PlAYER })),
  state.winner = undefined;

  if (state.nextPlayer === CPU) {
    doCpuMove();
  }
}

const maxRounds = state.fields.length;
const isDone = computed(() => state.rounds >= maxRounds || state.winner !== undefined);

const gameState = computed(() => {
  if (state.rounds >= maxRounds && state.winner === undefined) {
    return 'Remis 🥴';
  }

  if (state.winner?.player === HUMAN) {
    return 'You won! 🎉';
  }

  if (state.winner?.player === CPU) {
    return 'CPU won… 🤖';
  }

  return state.nextPlayer === HUMAN ? 'Your turn!' : 'CPU is thinking…';
});

function getBoxClass(box: Box) {
  const isWinningBox = state.winner !== undefined && state.winner.boxIndices.has(box.index);

  return {
    winning: isWinningBox,
    disabled: isDone.value || box.player !== NO_PlAYER,
    available: box.player === NO_PlAYER
  }
}

function doHumanMove(box: Box): void {
  if (!isDone.value && state.nextPlayer === HUMAN && box.player === NO_PlAYER) {
    box.player = HUMAN;
    onPlayed();
  }
}

function doCpuMove(): void {
  doAutomaticMove(CPU);
}

function doAutomaticMove(player: Player): void {
  if (isDone.value) {
    return;
  }

  const availableBoxes = state.fields.filter(box => box.player === NO_PlAYER);
  if (availableBoxes.length > 0) {
    const availableBoxIndex = Math.floor(Math.random() * availableBoxes.length);
    const box = availableBoxes[availableBoxIndex];
    box.player = player;
    onPlayed();
  }
}

function onPlayed(): void {
  state.rounds++;
  state.nextPlayer = state.nextPlayer === CPU ? HUMAN : CPU;
  state.winner = getWinner();

  if (state.nextPlayer === CPU) {
    doCpuMove();
  } else if (state.rounds === 8) {
    doAutomaticMove(state.nextPlayer);
  }
}

function getWinner(): Winner {
  if (state.rounds < 5) {
    return undefined;
  }

  for (const indices of WINNING_INDICES) {
    const [i1, i2, i3] = indices;
    const { player: p1 } = state.fields[i1];

    if (p1 !== NO_PlAYER) {
      const { player: p2 } = state.fields[i2];
      const { player: p3 } = state.fields[i3];
      if (p1 == p2 && p1 === p3) {
        return { player: p1, boxIndices: new Set(indices) };
      }
    }
  }

  return undefined;
}
</script>

<template>
  <div class="tick-tack-toe">
    <div class="actions caption">
      TickTackToe{{ state.playing ? '!' : '?' }}
      <span class="game-toggle" @click="toggleGame()">{{ state.playing ? '❌' : 'Sure!' }}</span>
    </div>
    <template v-if="state.playing">
      <div class="tick-tack-toe-grid">
        <div 
          v-for="(box, index) in state.fields" 
          :key="index" 
          class="ttt-box"
          :player="box.player === HUMAN ? 'human' : (box.player === CPU ? 'cpu' : null)"
          :class="getBoxClass(box)"
          @click="doHumanMove(box)"
        >
          {{ box.player }}
        </div>
      </div>
      <div class="actions caption">
        {{ gameState }}
        <Button v-show="isDone" variant="primary" @click="restart()">Restart</Button>
      </div>
    </template>
  </div>
</template>

<style scoped>
  .tick-tack-toe {
    --ttt-box-size: 80px;
    --ttt-box-font-size: 1.2rem;
    --ttt-width: calc(var(--ttt-box-size) * 3);
  }

  @media (min-width: 1200px) {
    .tick-tack-toe {
      --ttt-box-size: 60px;
      --ttt-box-font-size: 1.1rem;
    }
  }
  
  .tick-tack-toe {
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);
    width: var(--ttt-width);
  }

  .actions {
    display: flex;
    justify-content: space-between;
    gap: var(--gap-small);
  }

  .actions:first-of-type {
    font-weight: bold;
  }

  .game-toggle {
    color: var(--color-primary);
    cursor: pointer;
  }

  .tick-tack-toe-grid {
    display: grid;
    grid-template-columns: repeat(3, var(--ttt-box-size));
    grid-template-rows: repeat(3, var(--ttt-box-size));
  }

  .ttt-box {
    --border: 1px solid var(--vt-c-divider-dark-1);

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: var(--ttt-box-font-size);
    border: var(--border);
    box-sizing: border-box;
  }

  .ttt-box.available:hover {
    cursor: pointer;
    background-color: var(--vt-c-divider-light-2);
  }

  .ttt-box.disabled {
    background-color: var(--vt-c-divider-light-2);
  }

  .ttt-box[player="human"].winning {
    background-color: #14ca14;
  }

  .ttt-box[player="cpu"].winning {
    background-color: #e22d27;
  }
</style>