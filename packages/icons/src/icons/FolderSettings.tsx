import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolderSettings = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M12.9988 7L11.8832 4.76892C11.5622 4.1268 11.4016 3.80573 11.1621 3.57116C10.9504 3.36373 10.6951 3.20597 10.4149 3.10931C10.0979 3 9.73899 3 9.02107 3H5.19878C4.07867 3 3.51862 3 3.0908 3.21799C2.71447 3.40973 2.40851 3.71569 2.21677 4.09202C1.99878 4.51984 1.99878 5.0799 1.99878 6.2V7M1.99878 7H17.1988C18.8789 7 19.719 7 20.3607 7.32698C20.9252 7.6146 21.3842 8.07354 21.6718 8.63803C21.9988 9.27976 21.9988 9.31984 21.9988 11M1.99878 7V16.2C1.99878 17.8802 1.99878 18.7202 2.32576 19.362C2.61338 19.9265 3.07232 20.3854 3.63681 20.673C4.27854 21 5.11862 21 6.79878 21H12.4988'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16.1996 16.6495L15.2996 16.2495M16.1996 18.8496L15.2996 19.2496M17.8996 14.9493L17.4996 14.0493M17.8996 20.5493L17.4996 21.4493M20.4996 14.0493L20.0996 14.9493M20.4996 21.4493L20.0996 20.5493M22.6996 16.2495L21.7996 16.6495M22.6996 19.2496L21.7996 18.8496M21.9996 17.7495C21.9996 19.4064 20.6564 20.7495 18.9996 20.7495C17.3427 20.7495 15.9996 19.4064 15.9996 17.7495C15.9996 16.0927 17.3427 14.7495 18.9996 14.7495C20.6564 14.7495 21.9996 16.0927 21.9996 17.7495Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFolderSettings;
