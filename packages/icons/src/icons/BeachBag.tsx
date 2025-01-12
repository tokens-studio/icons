import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBeachBag = ({
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
			d='M1.84618 8.66667L1.4248 6.47554C1.37736 6.22885 1.5664 6 1.81761 6H14.1824C14.4336 6 14.6227 6.22885 14.5752 6.47554L14.1539 8.66667M1.84618 8.66667H14.1539M1.84618 8.66667L2.25644 11.3333M14.1539 8.66667L13.7436 11.3333M2.25644 11.3333L2.61451 13.6608C2.64453 13.8559 2.81243 14 3.00986 14H12.9902C13.1876 14 13.3555 13.8559 13.3856 13.6608L13.7436 11.3333M2.25644 11.3333H13.7436'
			stroke='currentColor'
		/>
		<path
			d='M5.33325 6V3.33333C5.33325 2.59695 5.93021 2 6.66659 2H9.33325C10.0697 2 10.6666 2.59695 10.6666 3.33333V6'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgBeachBag;
