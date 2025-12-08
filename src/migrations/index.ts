import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251208_015546 from './20251208_015546';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251208_015546.up,
    down: migration_20251208_015546.down,
    name: '20251208_015546'
  },
];
