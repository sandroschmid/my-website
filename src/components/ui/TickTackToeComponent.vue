<script setup lang="ts">
import Button from './ButtonComponent.vue';
import { CPU, HUMAN, NO_PlAYER, TickTackToeBox, useTickTackToeStore } from './TickTackToe.state';

const game = useTickTackToeStore();

function getBoxClass(box: TickTackToeBox) {
  const isWinningBox =
      game.winner !== undefined && game.winner.boxIndices.indexOf(box.index) >= 0;

  return {
    winning: isWinningBox,
    disabled: game.isDone || box.player !== NO_PlAYER,
    available: !game.isDone && box.player === NO_PlAYER,
  };
}
</script>

<template>
  <div class="tick-tack-toe">
    <div class="actions">
      <span class="caption">TickTackToe{{ game.playing ? '!' : '?' }}</span>
      <span class="game-toggle" @click="game.toggleGame()">
        {{ game.playing ? '❌' : 'Sure!' }}
      </span>
    </div>
    <template v-if="game.playing">
      <div class="tick-tack-toe-grid">
        <div
            v-for="(box, index) in game.fields"
            :key="index"
            class="ttt-box"
            :player="
            box.player === HUMAN ? 'human' : box.player === CPU ? 'cpu' : null
          "
            :class="getBoxClass(box)"
            @click="game.doHumanMove(box)"
        >
          {{ box.player }}
        </div>
      </div>
      <div class="actions">
        <span class="caption">{{ game.description }}</span>
        <Button
            v-show="game.isDone" variant="primary" @click="game.restart()"
        >Restart
        </Button>
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
  background-color: #14CA14;
}

.ttt-box[player="cpu"].winning {
  background-color: #E22D27;
}
</style>
