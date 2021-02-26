import AccessProLogo from 'images/access-control/accesspro.png';
import AltaiLogo from 'images/network/altai.png';
import BeldenLogo from 'images/network/belden.svg';
import BoschLogo from 'images/cctv/bosch.png';
import CambiumNetworksLogo from 'images/network/cambium-networks.svg';
import CameLogo from 'images/access-control/came.png';
import DahuaLogo from 'images/cctv/dahua.png';
import DormakabaLogo from 'images/access-control/dormakaba.png';
import EpcomLogo from 'images/cctv/epcom.png';
import FireLiteAlarmsLogo from 'images/fire-prev/fire-lite-alarms.jpg';
import GrandstreamLogo from 'images/rtc/grandstream.png';
import HanwhaLogo from 'images/cctv/hanwha.png';
import HidLogo from 'images/access-control/hid.svg';
import HikvisionLogo from 'images/ips/hikvision.svg';
import HilookLogo from 'images/cctv/hilook.png';
import HochikiLogo from 'images/fire-prev/hochiki.jpg';
import HoneywellLogo from 'images/ips/honeywell.svg';
import NotifierLogo from 'images/fire-prev/notifier.png';
import PanasonicLogo from 'images/rtc/panasonic.png';
import RosslareLogo from 'images/ips/rosslare.png';
import SaxxonLogo from 'images/cctv/saxxon.png';
import SecoLarmLogo from 'images/ips/seco-larm.jpg';
import SilentKnightLogo from 'images/fire-prev/silent-knight.png';
import SystemSensorLogo from 'images/fire-prev/system-sensor.png';
import TpLinkLogo from 'images/network/tp-link.svg';
import UbiquitiLogo from 'images/network/ubiquiti.png';
import VivotekLogo from 'images/cctv/vivotek.png';
import WeJoinLogo from 'images/access-control/wejoin.png';
import ZKTecoLogo from 'images/access-control/zkteco.png';

const PORTFOLIO_ITEMS = {
  accessControl: [
    {
      name: 'access-pro',
      logo: AccessProLogo,
    },
    {
      name: 'came',
      logo: CameLogo,
    },
    {
      name: 'dormakaba',
      logo: DormakabaLogo,
    },
    {
      name: 'hid',
      logo: HidLogo,
    },
    {
      name: 'seco-larm',
      logo: SecoLarmLogo,
    },
    {
      name: 'wejoin',
      logo: WeJoinLogo,
    },
    {
      name: 'zkteco',
      logo: ZKTecoLogo,
    },
  ],
  cctv: [
    {
      name: 'bosch',
      logo: BoschLogo,
    },
    {
      name: 'dahua',
      logo: DahuaLogo,
    },
    {
      name: 'epcom',
      logo: EpcomLogo,
    },
    {
      name: 'hanwha',
      logo: HanwhaLogo,
    },
    {
      name: 'hikvision',
      logo: HikvisionLogo,
    },
    {
      name: 'hilook',
      logo: HilookLogo,
    },
    {
      name: 'saxxon',
      logo: SaxxonLogo,
    },
    {
      name: 'vivotek',
      logo: VivotekLogo,
    },
  ],
  fireprev: [
    {
      name: 'fire-lite-alarms',
      logo: FireLiteAlarmsLogo,
    },
    {
      name: 'hochiki',
      logo: HochikiLogo,
    },
    {
      name: 'honeywell',
      logo: HoneywellLogo,
    },
    {
      name: 'notifier',
      logo: NotifierLogo,
    },
    {
      name: 'silent-knight',
      logo: SilentKnightLogo,
    },
    {
      name: 'system-sensor',
      logo: SystemSensorLogo,
    },
  ],
  ips: [
    {
      name: 'hikvision',
      logo: HikvisionLogo,
    },
    {
      name: 'honeywell',
      logo: HoneywellLogo,
    },
    {
      name: 'rosslare',
      logo: RosslareLogo,
    },
    {
      name: 'seco-larm',
      logo: SecoLarmLogo,
    },
  ],
  networks: [
    {
      name: 'altai',
      logo: AltaiLogo,
    },
    {
      name: 'belden',
      logo: BeldenLogo,
    },
    {
      name: 'cambium-networks',
      logo: CambiumNetworksLogo,
    },
    {
      name: 'tp-link',
      logo: TpLinkLogo,
    },
    {
      name: 'ubiquiti',
      logo: UbiquitiLogo,
    },
  ],
  rtc: [
    {
      name: 'grandstream',
      logo: GrandstreamLogo,
    },
    {
      name: 'panasonic',
      logo: PanasonicLogo,
    },
  ],
  grid: {
    accessControl: { columns: { base: 2, md: 4 }, spacing: 12 },
    cctv: { columns: { base: 2, md: 4 }, spacing: 12 },
    fireprev: { columns: { base: 2, md: 3 }, spacing: 12 },
    ips: { columns: { base: 2, md: 4 }, spacing: 12 },
    networks: { columns: { base: 2, md: 3 }, spacing: 12 },
    rtc: { columns: { base: 1, md: 2 }, height: 'auto' },
  },
};

export default PORTFOLIO_ITEMS;
