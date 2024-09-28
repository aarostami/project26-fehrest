import { Box, Button, Collapse, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Stack, Typography } from "@mui/material"
import { BxChevronDown, BxChevronLeft, BxChevronUp, BxHomeCircle } from "../Icons/icon"
import { useState } from "react"

const PanelButton = (props: any) => {
	return <>{props.data.map((data: any, index: any) => <MenuItem key={index}>
		<ListItemIcon>
			{data.icon}
		</ListItemIcon>
		<ListItemText>{data.text}</ListItemText>
		<BxChevronLeft style={{ fontSize: '1.5rem' }} />
	</MenuItem>
	)}
	</>
}

const PanelButtonIcon = (props: any) => {
	return <>{props.data.map((data: any, index: any) =>
		<Button key={index} sx={{ color: data.active == true ? '' : '#677788', backgroundColor: data.active == true ? '#e5edfc' : '', py: '0.5rem' }}>
			{data.icon}
		</Button>
	)}
	</>
}

const PanelButtonList = (props: any) => {
	const [open, setOpen] = useState({ index: 0, open: false })
	return <>{props.data.map((data: any, index: any) => <ListItem key={index + 1} sx={{ py: '3px', '& .MuiListItemButton-root': { backgroundColor: data.active == true ? '#e5edfc' : '', borderRadius: '5px', paddingRight: '11px' } }}>
		<List disablePadding sx={{ width: '100%' }}>
			<ListItemButton sx={{ height: '3rem' }} style={{ backgroundColor: (open.index == index + 1 && open.open == true) ? '#f6f6f6' : '' }} onClick={() => setOpen({ index: index + 1, open: !open.open })}>
				<ListItemIcon sx={{ color: data.active == true ? '' : '#677788' }}>{data.icon}</ListItemIcon>
				<ListItemText sx={{ '& .MuiTypography-root': { fontSize: '14px !important' }, pl: '5px' }}>{data.text}</ListItemText>
				{/*open == false ? <BxChevronLeft style={{ transition: '1s all' }} /> : <BxChevronDown style={{ transition: '1s all' }} />*/}{/*deghat transition kar nemikone dar toggle component */}
				{data.nested ? <BxChevronLeft style={{ transform: (open.index == index + 1 && open.open == true) ? 'rotate(-90deg)' : '', transition: '0.3s all' }} /> : ''}
			</ListItemButton>
			{props.panel == true ? <Collapse timeout={'auto'} in={open.index == index + 1 ? open.open : false} unmountOnExit>
				{data.nested ?
					<List sx={{ pt: '0', bgcolor: '#f6f6f6' }}>
						{data.nested.map((but: any, index: any) => <ListItemButton key={index}>
							<ListItemIcon sx={{ justifyContent: 'center' }}><Box component={'span'} sx={{ width: '7px', height: '7px', borderRadius: '50%', bgcolor: '#5a8dee' }}></Box></ListItemIcon>
							<ListItemText sx={{ textAlign: 'right' }}>{but.text}</ListItemText>
						</ListItemButton>
						)}
					</List>
					: ''}
			</Collapse> : ''}
		</List>
	</ListItem>
	)}
	</>
}

export { PanelButton, PanelButtonIcon, PanelButtonList }