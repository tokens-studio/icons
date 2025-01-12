import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDocStarIn = ({
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
			d='M2.66669 14.2666V1.73331C2.66669 1.5124 2.84577 1.33331 3.06669 1.33331H10.8344C10.9404 1.33331 11.0422 1.37545 11.1172 1.45047L13.2162 3.54949C13.2912 3.62451 13.3334 3.72625 13.3334 3.83233V14.2666C13.3334 14.4876 13.1543 14.6666 12.9334 14.6666H3.06669C2.84577 14.6666 2.66669 14.4876 2.66669 14.2666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.08991 6.94338L7.78265 5.47472C7.87151 5.28618 8.12845 5.28618 8.21731 5.47472L8.91005 6.94338L10.459 7.18038C10.6578 7.21078 10.737 7.46644 10.5931 7.61318L9.47245 8.75558L9.73691 10.3695C9.77091 10.5768 9.56305 10.7348 9.38518 10.6369L7.99998 9.87451L6.61477 10.6369C6.43694 10.7348 6.22907 10.5768 6.26303 10.3695L6.52751 8.75558L5.40685 7.61318C5.26296 7.46644 5.34217 7.21078 5.54092 7.18038L7.08991 6.94338Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 1.33331V3.59998C10.6667 3.82089 10.8458 3.99998 11.0667 3.99998H13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDocStarIn;
