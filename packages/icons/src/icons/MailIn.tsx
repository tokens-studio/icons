import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMailIn = ({
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
			d='M4.33331 6L7.33331 8L10.3333 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3334 12.6667H3.00002C2.26364 12.6667 1.66669 12.0698 1.66669 11.3334V4.66671C1.66669 3.93033 2.26364 3.33337 3.00002 3.33337H11.6667C12.4031 3.33337 13 3.93033 13 4.66671V6.00004'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M16.3333 9.33337H12.3333M12.3333 9.33337L14.3333 7.33337M12.3333 9.33337L14.3333 11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMailIn;
