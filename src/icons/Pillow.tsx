import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPillow = ({
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
			d='m14.027 8.189.399 2.793a1.333 1.333 0 0 1-1.453 1.515l-4.84-.484a1.3 1.3 0 0 0-.266 0l-4.84.484a1.333 1.333 0 0 1-1.453-1.515l.4-2.793a1.3 1.3 0 0 0 0-.378l-.4-2.793a1.333 1.333 0 0 1 1.453-1.515l4.84.484q.133.013.266 0l4.84-.484a1.333 1.333 0 0 1 1.453 1.515l-.399 2.793a1.3 1.3 0 0 0 0 .378M14 4l-2.667 2M4.667 10 2 12'
		/>
	</svg>
);
export default SvgPillow;
