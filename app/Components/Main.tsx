/* import ActivityBox from './Panel/ActitvityBox'
import ActivityTimelineBox from "./Panel/ActivityTimelineBox"
import AlertFinanBox from "./Panel/AlertFinanBox"
import ErjaBox from "./Panel/ErjaBox"
import IncomeBox from "./Panel/IncomeBox"
import IncreaseBox from "./Panel/IncreaseBox"
import ProfitBox from "./Panel/ProfitBox"
import SellingBox from "./Panel/SellingBox"
import SignupChartBox from "./Panel/SignupChartBox"
import StatisBox from "./Panel/StatisBox"
import TabdilBox from './Panel/TabdilBox'
import TabdilUserBox from './Panel/TabdilUserBox'
import ViewBox from './Panel/ViewBox' */
/* agar in error ro dashtim bayad 'dynamic import' estefade konim.
// hamin toori ba error kar mikone, ama dar github actions error dare va build nemikone.
// chon client object window dare, na server va ssr
⨯ ReferenceError: window is not defined
    at __webpack_require__ (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\webpack-runtime.js:33:42)
    at __webpack_require__ (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\webpack-runtime.js:33:42)
    at eval (./app/Components/Panel/StatisBox.tsx:11:74)
    at (ssr)/./app/Components/Panel/StatisBox.tsx (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\app\page.js:184:1)
    at __webpack_require__ (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\webpack-runtime.js:33:42)
    at eval (./app/Components/Main.tsx:7:74)
    at (ssr)/./app/Components/Main.tsx (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\app\page.js:151:1)    
    at __webpack_require__ (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\webpack-runtime.js:33:42)
    at eval (./app/page.tsx:9:74)
    at (ssr)/./app/page.tsx (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\app\page.js:195:1)
    at Object.__webpack_require__ [as require] (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\webpack-runtime.js:33:42)
	digest: "4238017030"
 	GET / 500 in 250ms
*/
import { Container } from "@mui/material"
import Grid from '@mui/material/Grid2'
import dynamic from "next/dynamic"
const ActivityBox = dynamic(() => import("./Panel/ActitvityBox"), { ssr: false })
const ActivityTimelineBox = dynamic(() => import("./Panel/ActivityTimelineBox"), { ssr: false })
const AlertFinanBox = dynamic(() => import("./Panel/AlertFinanBox"), { ssr: false })
const ErjaBox = dynamic(() => import("./Panel/ErjaBox"), { ssr: false })
const IncomeBox = dynamic(() => import("./Panel/IncomeBox"), { ssr: false })
const IncreaseBox = dynamic(() => import("./Panel/IncreaseBox"), { ssr: false })
const ProfitBox = dynamic(() => import("./Panel/ProfitBox"), { ssr: false })
const SellingBox = dynamic(() => import("./Panel/SellingBox"), { ssr: false })
const SignupChartBox = dynamic(() => import("./Panel/SignupChartBox"), { ssr: false })
const StatisBox = dynamic(() => import("./Panel/StatisBox"), { ssr: false })
const TabdilBox = dynamic(() => import("./Panel/TabdilBox"), { ssr: false })
const TabdilUserBox = dynamic(() => import("./Panel/TabdilUserBox"), { ssr: false })
const ViewBox = dynamic(() => import("./Panel/ViewBox"), { ssr: false })


const Main = () => {

	return <Container maxWidth={"xl"} sx={{ p: '1rem', pt: '5rem' }}>
		<Grid container sx={{ rowGap: '1rem' }}>
			<Grid container size={12} sx={{ height: '100%', flexWrap: 'wrap' }} spacing={'1rem'}>{/*bejaye gap: '1rem' */}
				<Grid size={{ xs: 12, md: 12, lg: 6 }} sx={{ height: '100%' }}>
					<StatisBox />
				</Grid>
				<Grid size={{ xs: 12, md: 12, lg: 6 }} container sx={{ gap: '1rem', height: '100%' }}>{/*deghat agar inja flexWrap: 'nowrap' bezarim dar inner ha ham asar dare! */}
					<Grid size={{ xs: 12, sm: 6 }} container sx={{ gap: '1rem', height: '100%' }}>{/*deghat agar flexDirection:'column' ro nazarim rowGap baraye paiintain kar nemikone */}
						<Grid size={{ xs: 12 }} sx={{ height: '100%' }}>
							<ErjaBox />
						</Grid>
						<Grid size={{ xs: 12 }} sx={{ height: '100%' }}>
							<ViewBox />
						</Grid>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }} container sx={{ flexDirection: 'column', flexWrap: 'nowrap', gap: '1rem' }}>{/*height: '100%' bezarim kharab mishe yekam! nemidoonam chera */}
						<Grid size={12} sx={{ height: '50%' }}>
							<TabdilBox />
						</Grid>
						{/* <Grid size={12} sx={{ height: '50%', rowGap: '2rem' }}> */}
						<Grid size={12} container sx={{ height: '50%', flexDirection: 'column', flexWrap: 'nowrap', gap: '1rem' }}>
							{/* <Grid size={12} sx={{ height: '50%' }}> */}
							<TabdilUserBox />
							{/* </Grid> */}
							{/* <Grid size={12} sx={{ height: '50%' }}> */}
							<IncomeBox />
							{/* </Grid> */}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid size={12} container sx={{ height: '100%' }} spacing={'1rem'}>{/*size={12} ro nazarim width dorost dar nemiyad */}
				<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
					<ActivityBox />
				</Grid>
				<Grid size={{ xs: 12, sm: 6, lg: 3 }} container sx={{ flexDirection: 'column', flexWrap: 'nowrap', gap: '1rem' }}>
					<ProfitBox />
					<SignupChartBox />
				</Grid>
				<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
					<SellingBox />
				</Grid>
				<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
					<IncreaseBox />
				</Grid>
			</Grid>
			<Grid size={12} container sx={{ height: '100%' }} spacing={'1rem'}>
				<Grid size={{ xs: 12, md: 6, lg: 8 }}>
					<AlertFinanBox />
				</Grid>
				<Grid size={{ xs: 12, md: 6, lg: 4 }}>
					<ActivityTimelineBox />
				</Grid>
			</Grid>
		</Grid>
	</Container>
}

export default Main