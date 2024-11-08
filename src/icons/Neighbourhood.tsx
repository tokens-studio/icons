import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNeighbourhood = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M7.333 14H2.667a1.333 1.333 0 0 1-1.334-1.333V9.64c0-.466.244-.899.643-1.14l2.333-1.414a1.33 1.33 0 0 1 1.382 0L8.024 8.5c.4.241.643.674.643 1.14v3.027c0 .736-.597 1.333-1.334 1.333M4.333 6.667v-2.36c0-.467.244-.9.643-1.14l2.333-1.415a1.33 1.33 0 0 1 1.382 0l2.333 1.414c.4.242.643.674.643 1.14v2.36M10.667 14h2.666c.737 0 1.334-.597 1.334-1.333V9.64c0-.466-.244-.899-.643-1.14l-2.336-1.417a1.33 1.33 0 0 0-1.378-.003l-.421.253'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 14v-2.267a.4.4 0 0 0-.4-.4H4.4a.4.4 0 0 0-.4.4V14M12 14v-2.267a.4.4 0 0 0-.4-.4h-.933'
		/>
	</svg>
);
export default SvgNeighbourhood;
