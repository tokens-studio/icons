import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLink02 = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M9.99999 13C10.4294 13.5741 10.9773 14.0492 11.6065 14.3929C12.2357 14.7367 12.9315 14.9411 13.6466 14.9923C14.3618 15.0436 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59699 21.9547 8.33398 21.9434 7.023C21.932 5.71201 21.4061 4.45795 20.4791 3.53091C19.552 2.60387 18.298 2.07803 16.987 2.06663C15.676 2.05524 14.413 2.55921 13.47 3.47L11.75 5.18M14 11C13.5705 10.4259 13.0226 9.95082 12.3934 9.60706C11.7642 9.26331 11.0685 9.05889 10.3533 9.00767C9.63819 8.95645 8.9204 9.05964 8.24864 9.31022C7.57688 9.56081 6.96687 9.95293 6.45999 10.46L3.45999 13.46C2.5492 14.403 2.04522 15.666 2.05662 16.977C2.06801 18.288 2.59385 19.5421 3.52089 20.4691C4.44793 21.3961 5.702 21.922 7.01298 21.9334C8.32396 21.9448 9.58697 21.4408 10.53 20.53L12.24 18.82'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLink02;
