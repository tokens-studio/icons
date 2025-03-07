import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFace3DDraft = ({
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
			d='M13.3334 5.1864V10.3842C13.3334 10.5189 13.2656 10.6445 13.153 10.7185L8.74251 13.6169C8.69257 13.6497 8.63604 13.6709 8.57684 13.6789L1.78743 14.6047C1.54726 14.6375 1.33339 14.4508 1.33339 14.2084L1.33337 6.00775C1.33337 5.86536 1.40907 5.7337 1.53213 5.66206L8.72471 1.47485C8.87051 1.38994 9.05397 1.4057 9.18317 1.51424L13.1906 4.8801C13.2811 4.9561 13.3334 5.06823 13.3334 5.1864Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66663 6L8.48463 7.948C8.59983 7.98093 8.72376 7.96047 8.82223 7.89227L13 5'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66663 13.6667V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 9.33998L11.0067 9.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6666 11.34L14.6733 11.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFace3DDraft;
