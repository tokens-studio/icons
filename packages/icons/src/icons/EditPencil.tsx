import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEditPencil = ({
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
			d='M9.57546 3.76769L10.5621 2.78103C11.0828 2.26033 11.927 2.26033 12.4477 2.78103L13.3905 3.72384C13.9112 4.24453 13.9112 5.08875 13.3905 5.60945L12.4039 6.59611M9.57546 3.76769L3.16499 10.1781C2.94361 10.3995 2.80719 10.6917 2.77964 11.0036L2.61825 12.8306C2.58174 13.2439 2.92765 13.5898 3.341 13.5533L5.16794 13.3919C5.47981 13.3644 5.77204 13.2279 5.99342 13.0066L12.4039 6.59611M9.57546 3.76769L12.4039 6.59611'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEditPencil;
