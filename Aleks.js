$member = Member::register($email, $password);
$memberRepository->save($member);
interface MemberRepository {
    public function save(Member $member);
    public function getAll();
    public function findById(MemberId $memberId);
    class ArrayMemberRepository implements MemberRepository {
    private $members = [];

    public function save(Member $member) {
        $this->members[(string) $member->getId()] = $member;
    }

    public function getAll() {
        return $this->members;
    }

    public function findById(MemberId $memberId) {
        if (isset($this->members[(string)$memberId])) {
            return $this->members[(string)$memberId];
                 }
    }
}
