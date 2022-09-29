import { babel } from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const config = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
    },
    {
      dir: 'dist',
      format: 'cjs',
      preserveModules: true,
    },
  ],
  external: [/@babel\/runtime/, 'react'],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    filesize(),
    peerDepsExternal({
      includeDependencies: true,
    }),
    typescript({
      clean: true,
      rollupCommonJSResolveHack: false,
    }),
  ],
};

export default config;
