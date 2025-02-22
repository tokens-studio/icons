import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoxShadowOuter = ({
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
			d='M13.0468 3.99666C14.991 5.19278 16.2883 7.34088 16.2883 9.79224C16.2883 13.5477 13.2439 16.5921 9.48842 16.5921C7.04442 16.5921 4.90183 15.3025 3.70361 13.3681L4.18535 13.0697C5.28458 14.8443 7.2487 16.0254 9.48842 16.0254C12.9309 16.0254 15.7216 13.2347 15.7216 9.79224C15.7216 7.54579 14.5334 5.57661 12.7498 4.47929L13.0468 3.99666Z'
			fill='currentColor'
		/>
		<path
			opacity={0.2}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M13.8528 5.34196C15.0058 6.47284 15.7216 8.0492 15.7216 9.79225C15.7216 13.2347 12.931 16.0255 9.48846 16.0255C7.74555 16.0255 6.16931 15.3098 5.03845 14.157L5.44298 13.7601C6.47165 14.8087 7.90389 15.4588 9.48846 15.4588C12.6179 15.4588 15.155 12.9218 15.155 9.79225C15.155 8.20755 14.5049 6.77521 13.456 5.74651L13.8528 5.34196Z'
			fill='currentColor'
		/>
		<path
			opacity={0.35}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M14.3641 6.90311C14.8665 7.74931 15.1549 8.73753 15.1549 9.79226C15.1549 12.9218 12.6179 15.4588 9.48839 15.4588C8.41022 15.4588 7.40158 15.1575 6.54309 14.6342L6.83802 14.1503C7.61018 14.621 8.51719 14.8922 9.48839 14.8922C12.305 14.8922 14.5883 12.6089 14.5883 9.79226C14.5883 8.84214 14.3287 7.9535 13.8768 7.19242L14.3641 6.90311Z'
			fill='currentColor'
		/>
		<path
			opacity={0.5}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M14.4461 8.59117C14.5391 8.9766 14.5883 9.37886 14.5883 9.79224C14.5883 12.6089 12.305 14.8921 9.48845 14.8921C9.04761 14.8921 8.61943 14.8362 8.21082 14.7308L8.35238 14.182C8.71514 14.2756 9.09576 14.3255 9.48845 14.3255C11.992 14.3255 14.0217 12.2958 14.0217 9.79224C14.0217 9.42401 13.9778 9.06638 13.8952 8.72417L14.4461 8.59117Z'
			fill='currentColor'
		/>
		<path
			opacity={0.65}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M13.9259 10.7231C13.5568 12.491 12.1587 13.8803 10.3861 14.2365L10.2744 13.681C11.8245 13.3695 13.0485 12.1534 13.3713 10.6073L13.9259 10.7231Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgBoxShadowOuter;
