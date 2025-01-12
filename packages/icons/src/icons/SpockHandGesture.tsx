import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSpockHandGesture = ({
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
			d='M12 5L12.6125 5.10208C13.3665 5.22775 13.8607 5.96031 13.6949 6.70653L13.3429 8.29047C13.3365 8.31893 13.3333 8.3482 13.3333 8.3774C13.3333 10.1269 13.3333 11.6667 13.3333 11.6667C13.3333 13 12.2667 14.3333 10.6667 14.3333C9.41725 14.3333 7.34125 14.3333 6.27985 14.3333C5.89061 14.3333 5.52087 14.1633 5.26756 13.8677L2.23524 10.33C1.90539 9.9452 1.89582 9.3802 2.21244 8.98447C2.62291 8.47133 3.39748 8.45427 3.83016 8.94873L5.33332 10.6667V8.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.99998 3.33325L5.47309 3.42107C4.68791 3.55193 4.19158 4.33717 4.41026 5.10255L5.33332 8.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33334 8.33339L5.94843 3.07071C5.7972 2.49606 6.17258 1.91574 6.75874 1.81805C7.27314 1.73231 7.76821 2.05255 7.90094 2.5569L9.33334 8.00006'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 8.3334L12 5.00006L12.165 4.01016C12.2579 3.4523 11.881 2.92469 11.3232 2.83171C10.7733 2.74006 10.2511 3.10515 10.1484 3.6531L9.33331 8.00006'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSpockHandGesture;
