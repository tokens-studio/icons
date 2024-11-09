import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoxShadowInner = ({
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
		<circle cx={8} cy={8} r={6} stroke='currentColor' strokeWidth={1.5} />
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M12.5 4.417c-3.805 1.038-7.273 4.507-8.31 8.31l-.483-.131c1.084-3.975 4.686-7.577 8.66-8.66z'
			clipRule='evenodd'
			opacity={0.05}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M12.218 3.993C8.372 5.07 4.843 8.6 3.765 12.446l-.482-.135c1.126-4.014 4.786-7.674 8.8-8.8z'
			clipRule='evenodd'
			opacity={0.1}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M11.857 3.591C8.028 4.728 4.505 8.25 3.365 12.078l-.479-.143c1.188-3.99 4.838-7.639 8.83-8.823z'
			clipRule='evenodd'
			opacity={0.15}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M11.384 3.227C7.648 4.442 4.216 7.874 3 11.61l-.475-.155c1.265-3.887 4.817-7.438 8.704-8.702z'
			clipRule='evenodd'
			opacity={0.2}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M10.857 2.89c-3.599 1.29-6.896 4.584-8.191 8.183l-.47-.17C3.54 7.166 6.948 3.76 10.688 2.42z'
			clipRule='evenodd'
			opacity={0.25}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M10.24 2.597C6.836 3.96 3.736 7.059 2.37 10.46l-.464-.186c1.417-3.529 4.618-6.728 8.147-8.142z'
			clipRule='evenodd'
			opacity={0.3}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M9.544 2.354C6.4 3.77 3.548 6.618 2.131 9.763l-.456-.205C3.143 6.3 6.082 3.363 9.339 1.898z'
			clipRule='evenodd'
			opacity={0.35}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M8.744 2.187C5.93 3.617 3.395 6.15 1.963 8.964l-.446-.227c1.48-2.907 4.093-5.518 7-6.996z'
			clipRule='evenodd'
			opacity={0.4}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M7.8 2.133C5.423 3.513 3.29 5.645 1.91 8.02l-.432-.25c1.424-2.45 3.62-4.645 6.07-6.068z'
			clipRule='evenodd'
			opacity={0.45}
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M6.641 2.27a17.4 17.4 0 0 0-4.6 4.6l-.414-.28a17.9 17.9 0 0 1 4.734-4.734z'
			clipRule='evenodd'
			opacity={0.5}
		/>
	</svg>
);
export default SvgBoxShadowInner;
