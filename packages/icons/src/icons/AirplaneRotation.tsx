import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplaneRotation = ({
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
			d='M6.58579 9.41454C7.36687 10.1956 8.63313 10.1956 9.4142 9.41454C10.1953 8.63347 10.1953 7.36714 9.4142 6.58609C8.63313 5.80504 7.36687 5.80504 6.58579 6.58609C5.80474 7.36714 5.80473 8.63347 6.58579 9.41454Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.9138 11.1817C2.7275 10.8849 2.56582 10.5698 2.4332 10.2408C2.15406 9.54866 2.00061 8.79273 2.00061 8.0008C2.00061 5.1766 3.95643 2.80586 6.58609 2.16928C7.03956 2.0594 7.51316 2.0013 8.00009 2.0013'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.1433 4.91113C13.687 5.81421 13.9996 6.87073 13.9996 8.00053C13.9996 10.538 12.4208 12.7092 10.1934 13.5857C9.51392 13.8529 8.77372 14 8.00012 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M9.41419 6.58612C9.41419 6.58612 9.40805 4.71794 10.357 3.75768C11.297 2.81865 12.2195 1.84802 13.1855 2.81488C14.1033 3.73364 13.1953 4.68777 12.2427 5.6433C11.3083 6.58046 9.41419 6.58612 9.41419 6.58612Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M6.58582 9.41386C6.58582 9.41386 6.59194 11.2821 5.64301 12.2423C4.70302 13.1813 3.78049 14.152 2.81458 13.1851C1.89676 12.2663 2.80468 11.3122 3.75739 10.3567C4.69171 9.41953 6.58582 9.41386 6.58582 9.41386Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAirplaneRotation;
