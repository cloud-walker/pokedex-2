import { FC } from 'react';
import Head from 'next/head';

interface MetaProps {
	title: string;
	desc: string;
	canonical: string;
	image: string;
	js?: any;
	css?: any;
}

const Meta: FC<MetaProps> = (props: MetaProps) => (
	<Head>
		<title>{props.title}</title>
		<meta name='description' content={props.desc} />
		<meta property='og:type' content='website' />
		<meta name='og:title' property='og:title' content={props.title} />
		<meta
			name='og:description'
			property='og:description'
			content={props.desc}
		/>
		<meta property='og:site_name' content='Latinaquotidiano.it' />
		<meta property='og:url' content={`${props.canonical}`} />
		<meta name='twitter:card' content='summary' />
		<meta name='twitter:title' content={props.title} />
		<meta name='twitter:description' content={props.desc} />
		<meta name='twitter:site' content='@latinaquotidiano' />
		<meta name='twitter:creator' content='@latinaquotidiano' />
		<link
			rel='apple-touch-icon'
			sizes='57x57'
			href='/favicon/apple-icon-57x57.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='60x60'
			href='/favicon/apple-icon-60x60.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='72x72'
			href='/favicon/apple-icon-72x72.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='76x76'
			href='/favicon/apple-icon-76x76.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='114x114'
			href='/favicon/apple-icon-114x114.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='120x120'
			href='/favicon/apple-icon-120x120.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='144x144'
			href='/favicon/apple-icon-144x144.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='152x152'
			href='/favicon/apple-icon-152x152.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='180x180'
			href='/favicon/apple-icon-180x180.png'
		/>
		<link
			rel='icon'
			type='image/png'
			sizes='192x192'
			href='/favicon/android-icon-192x192.png'
		/>
		<link
			rel='icon'
			type='image/png'
			sizes='32x32'
			href='/favicon/favicon-32x32.png'
		/>
		<link
			rel='icon'
			type='image/png'
			sizes='96x96'
			href='/favicon/favicon-96x96.png'
		/>
		<link
			rel='icon'
			type='image/png'
			sizes='16x16'
			href='/favicon/favicon-16x16.png'
		/>
		<link rel='manifest' href='/favicon/manifest.json' />
		<meta name='msapplication-TileColor' content='#ffffff' />
		<meta
			name='msapplication-TileImage'
			content='/favicon/ms-icon-144x144.png'
		/>
		<meta name='theme-color' content='#ffffff' />
		{props.css && <link rel='stylesheet' href={`${props.css}`} />}
		{props.image ? (
			<meta property='og:image' content={`${props.image}`} />
		) : (
			<meta
				property='og:image'
				content='https://www.propernoun.co/static/images/proper-noun-social.png'
			/>
		)}
		{props.image && (
			<meta name='twitter:image' content={`${props.image}`} />
		)}
		{props.canonical && (
			<link rel='canonical' href={`${props.canonical}`} />
		)}
		{props.js && (
			<script type='text/javascript' src={`${props.js}`}></script>
		)}
	</Head>
);

export default Meta;
