import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNavigator = ({
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
			strokeWidth={1.5}
			d='M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M11.916 10.317c.307.58-.292 1.22-.891.954L8 9.927 4.975 11.27c-.6.267-1.198-.374-.891-.954l3.305-6.244a.69.69 0 0 1 1.221 0z'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgNavigator;
