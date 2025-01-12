import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoxShadowInner = ({
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
		<circle cx={8} cy={8} r={6} stroke='currentColor' strokeWidth={1.5} />
		<path
			opacity={0.05}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M12.4992 4.41746C8.69548 5.45482 5.22667 8.92364 4.1893 12.7273L3.70691 12.5957C4.79087 8.62128 8.39312 5.01903 12.3676 3.93507L12.4992 4.41746Z'
			fill='currentColor'
		/>
		<path
			opacity={0.1}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M12.218 3.99272C8.37167 5.07107 4.84287 8.59987 3.76452 12.4461L3.28308 12.3112C4.40855 8.29686 8.06866 4.63675 12.0831 3.51128L12.218 3.99272Z'
			fill='currentColor'
		/>
		<path
			opacity={0.15}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M11.8574 3.59122C8.0282 4.72765 4.50507 8.24889 3.36533 12.0777L2.88611 11.9351C4.07404 7.94435 7.72387 4.29642 11.7151 3.11189L11.8574 3.59122Z'
			fill='currentColor'
		/>
		<path
			opacity={0.2}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M11.384 3.22736C7.64841 4.44231 4.21642 7.87357 3.00022 11.6091L2.52478 11.4543C3.79048 7.56676 7.34169 4.01629 11.2293 2.75188L11.384 3.22736Z'
			fill='currentColor'
		/>
		<path
			opacity={0.25}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M10.8573 2.8893C7.2581 4.18012 3.9611 7.47441 2.66564 11.0729L2.19519 10.9036C3.54117 7.16474 6.94874 3.75989 10.6885 2.41866L10.8573 2.8893Z'
			fill='currentColor'
		/>
		<path
			opacity={0.3}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M10.2395 2.59689C6.83728 3.96032 3.73693 7.05934 2.37124 10.4612L1.90723 10.2749C3.32376 6.74643 6.52453 3.547 10.0535 2.13277L10.2395 2.59689Z'
			fill='currentColor'
		/>
		<path
			opacity={0.35}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M9.54448 2.3544C6.39857 3.76916 3.54824 6.6177 2.13052 9.76305L1.67468 9.55759C3.14257 6.30095 6.08206 3.36327 9.33941 1.89839L9.54448 2.3544Z'
			fill='currentColor'
		/>
		<path
			opacity={0.4}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M8.74435 2.18652C5.93045 3.61684 3.39516 6.15076 1.96266 8.96414L1.51709 8.73727C2.99758 5.82964 5.60954 3.21907 8.51779 1.7408L8.74435 2.18652Z'
			fill='currentColor'
		/>
		<path
			opacity={0.45}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M7.79933 2.13313C5.42415 3.51261 3.29088 5.64478 1.90975 8.01945L1.47754 7.76807C2.90229 5.31839 5.09796 3.12384 7.54822 1.70076L7.79933 2.13313Z'
			fill='currentColor'
		/>
		<path
			opacity={0.5}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M6.64129 2.27053C4.85686 3.47629 3.24705 5.08627 2.04152 6.87079L1.6272 6.5909C2.86852 4.75339 4.52395 3.0978 6.36135 1.85625L6.64129 2.27053Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgBoxShadowInner;
