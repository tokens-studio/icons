import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShieldEye = ({
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
			d='M5.33325 6.00004C5.33325 6.00004 5.99992 5.33337 7.99992 5.33337C9.99992 5.33337 10.6666 6.00004 10.6666 6.00004'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99992 9.33333C8.36812 9.33333 8.66659 9.03487 8.66659 8.66667C8.66659 8.29847 8.36812 8 7.99992 8C7.63172 8 7.33325 8.29847 7.33325 8.66667C7.33325 9.03487 7.63172 9.33333 7.99992 9.33333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33326 12L2.08684 3.27501C2.03757 2.93015 2.26252 2.6083 2.60258 2.53273L7.71066 1.39759C7.9012 1.35526 8.09866 1.35526 8.2892 1.39759L13.3973 2.53273C13.7373 2.6083 13.9623 2.93015 13.913 3.275L12.6666 12C12.6195 12.33 12.3333 14.3333 7.99993 14.3333C3.6666 14.3333 3.3804 12.33 3.33326 12Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgShieldEye;
