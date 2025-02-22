import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCubeBandage = ({
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
			d='M8.00001 14.6667L2.20576 11.4477C2.07877 11.3771 2.00001 11.2433 2.00001 11.098L2 4.90204C2 4.75677 2.07876 4.62292 2.20575 4.55238L7.80574 1.44127C7.92654 1.37415 8.07347 1.37415 8.19427 1.44127L13.7943 4.55238C13.9213 4.62292 14 4.75677 14 4.90204V7.33335'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.35229 4.8624L7.80574 7.89211C7.92654 7.95918 8.07347 7.95918 8.19427 7.89211L13.6667 4.85187'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 8V11.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 1.33331V5.99998'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.438 11.4951L12.9094 11.9665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.4951 12.4378L11.9665 12.9092'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.438 9.60962L9.60949 12.4381C9.08883 12.9588 9.08883 13.803 9.60949 14.3237L10.0809 14.7951C10.6016 15.3158 11.4458 15.3158 11.9665 14.7951L14.795 11.9667C15.3156 11.446 15.3156 10.6017 14.795 10.081L14.3236 9.60962C13.8028 9.08895 12.9586 9.08895 12.438 9.60962Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCubeBandage;
