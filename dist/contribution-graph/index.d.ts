import { ViewStyle } from "react-native";
import { AbstractChartProps } from "../AbstractChart";
import ContributionGraph, { ContributionChartValue, TooltipDataAttrs } from "./ContributionGraph";
export interface ContributionDayInfo {
    count: number;
    date: Date;
}
export interface ContributionGraphProps extends AbstractChartProps {
    values: Array<any>;
    endDate: Date;
    numDays: number;
    width: number;
    height: number;
    gutterSize?: number;
    squareSize?: number;
    horizontal?: boolean;
    showMonthLabels?: boolean;
    showOutOfRangeDays?: boolean;
    accessor?: string;
    getMonthLabel?: (monthIndex: number) => string;
    onDayPress?: (info: ContributionDayInfo) => void;
    classForValue?: (value: string) => string;
    style?: Partial<ViewStyle>;
    titleForValue?: (value: ContributionChartValue) => string;
    tooltipDataAttrs: TooltipDataAttrs;
}
export type ContributionGraphState = {
    maxValue: number;
    minValue: number;
    valueCache: object;
};
export default ContributionGraph;
//# sourceMappingURL=index.d.ts.map