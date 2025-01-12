import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgYoutube = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M9.33333 8.00008L7 9.33341V6.66675L9.33333 8.00008Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 8.47167V7.52827C1.33325 5.59804 1.33325 4.63293 1.93691 4.01195C2.54058 3.39097 3.49096 3.36409 5.39171 3.31033C6.29241 3.28485 7.21245 3.2666 7.99992 3.2666C8.78738 3.2666 9.70745 3.28485 10.6081 3.31033C12.5089 3.36409 13.4593 3.39097 14.0629 4.01195C14.6666 4.63293 14.6666 5.59804 14.6666 7.52827V8.47167C14.6666 10.4019 14.6666 11.367 14.0629 11.9879C13.4593 12.6089 12.5089 12.6358 10.6082 12.6896C9.70745 12.7151 8.78738 12.7333 7.99992 12.7333C7.21245 12.7333 6.29236 12.7151 5.39165 12.6896C3.49093 12.6358 2.54057 12.6089 1.93691 11.9879C1.33325 11.367 1.33325 10.4019 1.33325 8.47167Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgYoutube;
