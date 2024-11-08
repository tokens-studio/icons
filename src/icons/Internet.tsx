import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgInternet = ({
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
			d='M14.667 8A6.667 6.667 0 1 0 8 14.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 1.366s2 2.634 2 6.634M7.333 14.634s-2-2.634-2-6.634 2-6.634 2-6.634M1.753 10.333H8M1.753 5.667h12.494'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M14.586 11.945c.33.202.309.695-.03.734l-1.711.194-.768 1.541c-.152.306-.622.156-.7-.222l-.837-4.078c-.065-.32.222-.521.5-.35z'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgInternet;
