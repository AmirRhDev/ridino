import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fa";

dayjs.extend(relativeTime);
dayjs.locale("fa");

export default dayjs;
