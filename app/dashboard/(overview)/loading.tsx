import DashboardSkeleton from "@/app//ui/skeletons"

//dafault function/file rendered statically, in case dynamic pages/content are not ready yet to be delivered
//builds on top of Suspense
export default function Loading(){
    return <DashboardSkeleton/>
} 