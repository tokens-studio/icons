import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseBackup = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
		height={17}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2.667 4v4s0 2 4.666 2q.592 0 1.088-.04M12 4v4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M7.333 2C12 2 12 4 12 4s0 2-4.667 2-4.666-2-4.666-2 0-2 4.666-2M7.333 14c-4.666 0-4.666-2-4.666-2V8M15.111 11.778C14.698 10.73 13.756 10 12.661 10c-1.173 0-2.17.836-2.53 2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.997 11.778h1.114c.123 0 .222-.1.222-.223v-1.259M10.222 13.556c.413 1.046 1.355 1.777 2.451 1.777 1.172 0 2.169-.836 2.53-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.337 13.556h-1.115c-.122 0-.222.1-.222.222v1.259'
		/>
	</svg>
);
export default SvgDatabaseBackup;
