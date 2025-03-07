import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShieldAlt = ({
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
			d='M2.38091 5.33332C2.26021 4.48841 2.15598 3.75881 2.08721 3.27741C2.03794 2.93255 2.26255 2.6083 2.60261 2.53273L7.71069 1.39759C7.90122 1.35526 8.09869 1.35526 8.28922 1.39759L13.3973 2.53273C13.7374 2.6083 13.962 2.93255 13.9127 3.27741C13.844 3.75881 13.7397 4.48841 13.619 5.33332M2.38091 5.33332H13.619M2.38091 5.33332C2.5866 6.77319 2.84014 8.54799 3.04758 9.99999M13.619 5.33332C13.4133 6.77319 13.1598 8.54799 12.9524 9.99999M3.04758 9.99999C3.16216 10.8021 3.26268 11.5057 3.33329 12C3.38043 12.33 3.66662 14.3333 7.99996 14.3333C12.3333 14.3333 12.6195 12.33 12.6666 12C12.7372 11.5057 12.8378 10.8021 12.9524 9.99999M3.04758 9.99999H12.9524'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgShieldAlt;
