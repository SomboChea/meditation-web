<?php

use Illuminate\Database\Seeder;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \Illuminate\Support\Facades\DB::select("INSERT INTO `services` ( `link`, `title`, `description`, `summary`, `icon`, `user_id`, `created_at`, `updated_at`) VALUES
( NULL, 'POS Solutions', 'CUBETIQ POS is one of the best POS solutions designed for the needs of restaurants, bars, coffee shops, dining venues, retail and more. Our POS System is very easy to use and implement. CUBETIQ POS is designed to be compatible with systems and equipment such as cash drawers, barcode scanners and receipt printers.', 'CUBETIQ provides top-notch Point of Sales solutions for small and medium businesses worldwide', '/storage/icons/POS.png', '1', NULL, NULL)
,( NULL, 'Window Applications', 'Your business needs a reliable enterprise software solution to support your many operations. It needs to scale, coordinate other software and mobile apps, incorporate advance tech, and cover an extensive list of other objectives. CUBETIQ has the experience, tools, and technologies to create such demanding custom software.', 'We design and develop a variety of applications for Windows including specialized and custom enterprise software', '/storage/icons/Windows.png', '1', NULL, NULL)
,( NULL, 'Web Development', 'We empower our clients with adaptive web applications built using open-source and proprietary web technologies and practices to simplify complex business workflows. We focus on a convergence of technology and consulting to create innovative web applications delivering secure, scalable and intuitive functionality to your end users.', 'Our company also design and develop a variety of websites using the latest and proven web technologies', '/storage/icons/Web.png', '1', NULL, NULL)
,( NULL, 'UX & UI Design', 'We offer custom software development and consulting services to help you pull off your next project with less stress and less cost. Our team has the technology prowess to power you at every stage of your product development lifecycle, from discovery to ongoing post-launch enhancement.', 'Our team of UX designers creates easy-to-understand interfaces for all kinds of applications', '/storage/icons/vector.png', '1', NULL, NULL)
,( NULL, 'QA & Testing', 'We offer custom software development and consulting services to help you pull off your next project with less stress and less cost. Our team has the technology prowess to power you at every stage of your product development lifecycle, from discovery to ongoing post-launch enhancement.', 'We pay a lot of attention to QA and Testing procedures to ensure the best quality of our software', '/storage/icons/bug.png', '1', NULL, NULL)
,( NULL, 'Maintainance & Support', 'Our dedicated support team will help our customers. Software support contracts include remote troubleshooting and support provided via the telephone and online channels, as well as installation assistance and basic usability assistance. Software support services do not include the purchase of subscriptions that provide entitlement and rights to use future minor versions (point releases) or future major releases of software.', 'We are commited to service excellence and maintaining lasting partnerships with our customers We will continue evolve at the same place as your business', '/storage/icons/Custom.png', '1', NULL, NULL)
");
    }
}
