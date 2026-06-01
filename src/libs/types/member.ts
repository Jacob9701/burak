import { MemberType } from "../enums/member.enum";

export interface MemberInput {
    memberType: MemberType;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
}