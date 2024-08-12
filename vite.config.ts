import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dsv from '@rollup/plugin-dsv';
import path from "path";
import { autoType } from 'd3-dsv';

export default defineConfig({
	plugins: [sveltekit(),  dsv({ processRow: autoType })],
	resolve: {
		alias: {
			$data: path.resolve("./src/data"),
		}
	}
	
});
