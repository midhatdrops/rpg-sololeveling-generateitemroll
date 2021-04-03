import { rollValidation } from '../../Rands/Leilao/Validator/RollValidation';
import { DungeonsRank } from '../../Rands/Regular/dungeonsRank';
export function bonusTranslator(dgRank: string, roll: number) {
  const rank = DungeonsRank[dgRank as keyof typeof DungeonsRank];
  switch (rank) {
    case 2: {
      return rollValidation(
        roll,
        { bonus: 24, points: -10 },
        { bonus: 30, points: 0 },
        { bonus: 50, points: 0 }
      );
    }
    case 3: {
      return rollValidation(
        roll,
        { bonus: 50, points: 0 },
        { bonus: 60, points: 10 },
        { bonus: 100, points: 10 }
      );
    }
    case 4: {
      return rollValidation(
        roll,
        { bonus: 100, points: 10 },
        { bonus: 120, points: 20 },
        { bonus: 180, points: 20 }
      );
    }
    case 5: {
      return rollValidation(
        roll,
        { bonus: 180, points: 20 },
        { bonus: 250, points: 30 },
        { bonus: 340, points: 30 }
      );
    }
    default: {
      return rollValidation(
        roll,
        { bonus: 15, points: -10 },
        { bonus: 24, points: -10 },
        { bonus: 15, points: -10 }
      );
    }
  }
}
