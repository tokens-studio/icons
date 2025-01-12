import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBasketball = ({
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
			d='M11.8239 13.4611C14.8399 11.3492 15.5729 7.19225 13.461 4.17619C11.3492 1.16015 7.19219 0.427168 4.17616 2.53902C1.16012 4.65087 0.427138 8.80785 2.53899 11.8239C4.65084 14.8399 8.80779 15.5729 11.8239 13.4611Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.8238 13.4611L4.17615 2.53903'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.0516 3.64899C10.5377 7.57953 7.37929 9.79113 2.18347 11.2589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.70642 1.37082C8.98209 4.86403 10.9678 7.69999 14.471 9.60345'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.52893 6.39661C4.71718 7.85047 6.70298 10.6863 7.29351 14.6293'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBasketball;
