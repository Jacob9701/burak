import MemberModel from "../schema/Member.model";
import { MemberInput } from "../libs/types/member";

class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel;
    }

    public async processSignup(input: MemberInput) {
        const result = await this.memberModel.create(input);
        return result;
    }
}

export default MemberService;