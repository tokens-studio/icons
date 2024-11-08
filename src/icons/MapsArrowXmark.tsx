import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapsArrowXmark = ({
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
			d='m9.333 11.519-1.212-.472a.33.33 0 0 0-.242 0l-5.011 1.949a.333.333 0 0 1-.411-.474l5.252-9.339a.333.333 0 0 1 .582 0l4.042 7.187M11.414 14.91l1.415-1.415m0 0 1.414-1.414m-1.415 1.414-1.414-1.414m1.415 1.414 1.414 1.414'
		/>
	</svg>
);
export default SvgMapsArrowXmark;
