import { defineStore } from 'pinia';

export type Player = '🦸' | '🤖';
export type Winner = { 
    readonly player: Player | undefined, 
    readonly boxIndices: number[]
} | undefined;

export interface TickTackToeBox {
  player: Player | undefined;
  readonly index: number;
}

export interface TickTackToeState {
  playing: boolean;
  rounds: number;
  nextPlayer: Player;
  fields: Array<TickTackToeBox>;
  winner: Winner;
}

export const NO_PlAYER = undefined;
export const HUMAN: Player = '🦸';
export const CPU: Player = '🤖';
export const MAX_ROUNDS = 9;

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

function findWinner(state: TickTackToeState): Winner {
  if (state.rounds < 5) {
    return undefined;
  }

  for (const boxIndices of WINNING_INDICES) {
    const [i1, i2, i3] = boxIndices;
    const { player: p1 } = state.fields[i1];

    if (p1 !== NO_PlAYER) {
      const { player: p2 } = state.fields[i2];
      const { player: p3 } = state.fields[i3];
      if (p1 == p2 && p1 === p3) {
        return { player: p1, boxIndices };
      }
    }
  }

  return undefined;
}

export const useTickTackToeStore = defineStore('tickTackToe', {
  state: (): TickTackToeState => {
    return {
      playing: false,
      rounds: 0,
      nextPlayer: HUMAN,
      fields: new Array(MAX_ROUNDS)
        .fill(NO_PlAYER)
        .map((player, index) => ({ player, index })),
      winner: undefined,
    }
  },
  getters: {
    isDone: state => state.rounds >= MAX_ROUNDS || state.winner !== undefined,
    description: state => {
      if (state.rounds >= MAX_ROUNDS && state.winner === undefined) {
        return 'Remis 🥴';
      }
    
      if (state.winner?.player === HUMAN) {
        return 'You won! 🎉';
      }
    
      if (state.winner?.player === CPU) {
        return 'CPU won… 🤖';
      }
    
      return state.nextPlayer === HUMAN ? 'Your turn!' : 'CPU is thinking…';
    }
  },
  actions: {
    toggleGame() {
      const playing = !this.playing;
      if (playing) {
        this.$patch({
          playing,
          nextPlayer: HUMAN,
        });
        this.restart();
      } else {
        this.$patch({ playing });
      }
    },
    restart() {
      this.$patch({ 
        playing: true,
        rounds: 0,
        fields: this.fields.map(box => ({ ...box, player: NO_PlAYER })),
        winner: undefined,
       });

      if (this.nextPlayer === CPU) {
        this.doCpuMove();
      }
    },
    doHumanMove(box: TickTackToeBox): void {
      if (!this.isDone && this.nextPlayer === HUMAN && box.player === NO_PlAYER) {
        box.player = HUMAN;
        this.onPlayed();
      }
    },
    doCpuMove(): void {
      this.doAutomaticMove(CPU);
    },
    doAutomaticMove(player: Player): void {
      if (this.isDone) {
        return;
      }
    
      const availableBoxes = this.fields.filter(box => box.player === NO_PlAYER);
      if (availableBoxes.length > 0) {
        const availableBoxIndex = Math.floor(Math.random() * availableBoxes.length);
        const box = availableBoxes[availableBoxIndex];
        box.player = player;
        this.onPlayed();
      }
    },
    onPlayed(): void {
      this.$patch({
        rounds: this.rounds + 1,
        nextPlayer: this.nextPlayer === CPU ? HUMAN : CPU,
        winner: findWinner(this),
      });
    
      if (this.nextPlayer === CPU) {
        this.doCpuMove();
      } else if (this.rounds === 8) {
        this.doAutomaticMove(this.nextPlayer);
      }
    }
  },
});
