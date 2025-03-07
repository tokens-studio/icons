import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseSettings = ({
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
			d='M2.66663 4V8C2.66663 8 2.66663 10 7.33329 10C12 10 12 8 12 8V4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33329 2C12 2 12 4 12 4C12 4 12 6 7.33329 6C2.66663 6 2.66663 4 2.66663 4C2.66663 4 2.66663 2 7.33329 2Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33329 14C2.66663 14 2.66663 12 2.66663 12V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 14C13.4031 14 14 13.403 14 12.6666C14 11.9302 13.4031 11.3333 12.6667 11.3333C12.4238 11.3333 12.1962 11.3982 12 11.5117C11.6015 11.7422 11.3334 12.1731 11.3334 12.6666C11.3334 13.1602 11.6015 13.591 12 13.8216C12.1962 13.935 12.4238 14 12.6667 14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 14.6667C13.7712 14.6667 14.6666 13.7713 14.6666 12.6667C14.6666 11.5621 13.7712 10.6667 12.6666 10.6667C11.562 10.6667 10.6666 11.5621 10.6666 12.6667C10.6666 13.7713 11.562 14.6667 12.6666 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeDasharray='0.3 2'
		/>
	</svg>
);
export default SvgDatabaseSettings;
