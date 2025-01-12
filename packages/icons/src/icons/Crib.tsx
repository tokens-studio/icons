import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCrib = ({
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
			d='M2 3.33331V14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M2 10.6667H14' stroke='currentColor' strokeLinejoin='round' />
		<path d='M2 4.66669H14' stroke='currentColor' strokeLinejoin='round' />
		<path
			d='M12 10.6667V4.66669'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33337 10.6667V4.66669'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66663 10.6667V4.66669'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path d='M4 10.6667V4.66669' stroke='currentColor' strokeLinejoin='round' />
		<path d='M2 12.6667H14' stroke='currentColor' strokeLinejoin='round' />
		<path
			d='M14 3.33331V14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 3.33333C14.3682 3.33333 14.6667 3.03485 14.6667 2.66667C14.6667 2.29848 14.3682 2 14 2C13.6318 2 13.3334 2.29848 13.3334 2.66667C13.3334 3.03485 13.6318 3.33333 14 3.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.00004 3.33333C2.36823 3.33333 2.66671 3.03485 2.66671 2.66667C2.66671 2.29848 2.36823 2 2.00004 2C1.63185 2 1.33337 2.29848 1.33337 2.66667C1.33337 3.03485 1.63185 3.33333 2.00004 3.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCrib;
