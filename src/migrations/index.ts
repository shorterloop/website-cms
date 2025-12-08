import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251208_015546 from './20251208_015546';
import * as migration_20251208_020943 from './20251208_020943';
import * as migration_20251208_022538 from './20251208_022538';
import * as migration_20251208_035246 from './20251208_035246';
import * as migration_20251208_040706 from './20251208_040706';
import * as migration_20251208_041742 from './20251208_041742';
import * as migration_20251208_043139 from './20251208_043139';
import * as migration_20251208_185649 from './20251208_185649';
import * as migration_20251208_222121 from './20251208_222121';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251208_015546.up,
    down: migration_20251208_015546.down,
    name: '20251208_015546',
  },
  {
    up: migration_20251208_020943.up,
    down: migration_20251208_020943.down,
    name: '20251208_020943',
  },
  {
    up: migration_20251208_022538.up,
    down: migration_20251208_022538.down,
    name: '20251208_022538',
  },
  {
    up: migration_20251208_035246.up,
    down: migration_20251208_035246.down,
    name: '20251208_035246',
  },
  {
    up: migration_20251208_040706.up,
    down: migration_20251208_040706.down,
    name: '20251208_040706',
  },
  {
    up: migration_20251208_041742.up,
    down: migration_20251208_041742.down,
    name: '20251208_041742',
  },
  {
    up: migration_20251208_043139.up,
    down: migration_20251208_043139.down,
    name: '20251208_043139',
  },
  {
    up: migration_20251208_185649.up,
    down: migration_20251208_185649.down,
    name: '20251208_185649',
  },
  {
    up: migration_20251208_222121.up,
    down: migration_20251208_222121.down,
    name: '20251208_222121'
  },
];
