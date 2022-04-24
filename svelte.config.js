// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import autoPreprocess from 'svelte-preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor';
// import image from 'svelte-image';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	kit: {
		adapter: adapter({
			precompress: true
		})
	},
	preprocess: [
		seqPreprocessor([
			preprocess({
				scss: { prependData: '@import "./static/style.scss";' }
			}),
			autoPreprocess()
			// image()
		])
	]
};

export default config;
