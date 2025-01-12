import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGit = ({
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
		<mask
			id='mask0_1_4660'
			style={{
				maskType: 'luminance',
			}}
			maskUnits='userSpaceOnUse'
			x={0}
			y={0}
			width={16}
			height={16}
		>
			<path d='M16 0H0V16H16V0Z' fill='white' />
		</mask>
		<g mask='url(#mask0_1_4660)'>
			<path
				d='M8 6.66675C8.55227 6.66675 9 6.21903 9 5.66675C9 5.11446 8.55227 4.66675 8 4.66675C7.44773 4.66675 7 5.11446 7 5.66675C7 6.21903 7.44773 6.66675 8 6.66675Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 12C8.55227 12 9 11.5523 9 11C9 10.4477 8.55227 10 8 10C7.44773 10 7 10.4477 7 11C7 11.5523 7.44773 12 8 12Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10.8333 9.5C11.3856 9.5 11.8333 9.05227 11.8333 8.5C11.8333 7.94773 11.3856 7.5 10.8333 7.5C10.281 7.5 9.83331 7.94773 9.83331 8.5C9.83331 9.05227 10.281 9.5 10.8333 9.5Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 6.66675V10.0001'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M5.5 3.16675L7 4.66675'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.83331 6.5L9.83331 7.5'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.71712 0.949552C7.87332 0.793346 8.12659 0.793346 8.28285 0.949552L15.0505 7.71718C15.2067 7.87338 15.2067 8.12665 15.0505 8.28291L8.28285 15.0505C8.12665 15.2067 7.87338 15.2068 7.71712 15.0505L0.949491 8.28291C0.793285 8.12671 0.793285 7.87345 0.949491 7.71718L7.71712 0.949552Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
	</svg>
);
export default SvgGit;
