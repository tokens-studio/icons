import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAttachment = ({
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
			d='M14.2922 7.77481L8.16551 13.9015C7.41498 14.6521 6.39699 15.0737 5.33554 15.0737C4.27408 15.0737 3.2561 14.6521 2.50554 13.9015C1.75497 13.1509 1.33331 12.1329 1.33331 11.0715C1.33331 10.01 1.75497 8.99208 2.50554 8.24148L8.63218 2.11482C9.13258 1.61445 9.81125 1.33334 10.5188 1.33334C11.2265 1.33334 11.9052 1.61445 12.4055 2.11482C12.9059 2.6152 13.187 3.29386 13.187 4.00149C13.187 4.70913 12.9059 5.38778 12.4055 5.88816L6.27221 12.0148C6.02202 12.265 5.68269 12.4055 5.32887 12.4055C4.97505 12.4055 4.63573 12.265 4.38554 12.0148C4.13535 11.7646 3.99479 11.4253 3.99479 11.0715C3.99479 10.7177 4.13535 10.3783 4.38554 10.1281L10.0455 4.47482'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAttachment;
