import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGraduationCap = ({
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
			d='m1.716 5.642 5.772-2.886a.4.4 0 0 1 .357 0l5.773 2.886a.4.4 0 0 1 0 .716L7.845 9.244a.4.4 0 0 1-.357 0L1.716 6.358a.4.4 0 0 1 0-.716'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M15 8.667V6.333l-1.333-.666M3 7v3.608c0 .515.296.984.761 1.204l3.334 1.583c.362.172.782.172 1.144 0l3.333-1.582c.465-.221.761-.69.761-1.205V7'
		/>
	</svg>
);
export default SvgGraduationCap;
