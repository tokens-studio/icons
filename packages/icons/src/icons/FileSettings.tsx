import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFileSettings = ({
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
			d='M14 11H8M10 15H8M16 7H8M12 22H8.8C7.1 22 6.3 22 5.6 21.7C5 21.4 4.6 21 4.3 20.4C4 19.7 4 18.9 4 17.2V6.8C4 5.1 4 4.3 4.3 3.6C4.6 3 5 2.6 5.6 2.3C6.3 2 7.1 2 8.8 2H15.2C16.9 2 17.7 2 18.4 2.3C19 2.6 19.4 3 19.7 3.6C20 4.3 20 5.1 20 6.8V11.5M15.5 17.2002L14.6 16.8002M15.5 19.4003L14.6 19.8003M17.2 15.5L16.8 14.6M17.2 21.1L16.8 22M19.8 14.6L19.4 15.5M19.8 22L19.4 21.1M22 16.8002L21.1 17.2002M22 19.8003L21.1 19.4003M21.3 18.3002C21.3 19.957 19.9568 21.3002 18.3 21.3002C16.6431 21.3002 15.3 19.957 15.3 18.3002C15.3 16.6433 16.6431 15.3002 18.3 15.3002C19.9568 15.3002 21.3 16.6433 21.3 18.3002Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFileSettings;
