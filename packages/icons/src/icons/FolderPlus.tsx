import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolderPlus = ({
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
			d='M12 4.00002H13.3333M13.3333 4.00002H14.6667M13.3333 4.00002V2.66669M13.3333 4.00002V5.33335'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.2667 13.3333H1.73337C1.51246 13.3333 1.33337 13.1542 1.33337 12.9333V7.33331H14.2667C14.4876 7.33331 14.6667 7.51238 14.6667 7.73331V12.9333C14.6667 13.1542 14.4876 13.3333 14.2667 13.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 7.33335V3.06669C1.33337 2.84577 1.51246 2.66669 1.73337 2.66669H5.85207C5.94755 2.66669 6.03989 2.70085 6.11239 2.76299L8.22104 4.57039C8.29351 4.63253 8.38584 4.66669 8.48137 4.66669H9.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFolderPlus;
