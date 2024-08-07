"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface WorkTabData {
    id: number;
    brand: string;
    brandLogo: string;
    projects: {
        id: number;
        name: string;
        thum: string;
        url: string;
        rewards: {
            id: number;
            title: string;
            awardImg: string;
        }[];
    }[];
}
const WorkMenu = () => {
    const [data, setData] = useState<WorkTabData[]>([]);
    const [selectedTab, setSelectedTab] = useState<number | null>(null);
    const pathname = usePathname(); // Get the current path
    const currentProject = data.flatMap(item => item.projects).find(project => project.url === pathname);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json');
            const result: WorkTabData[] = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    const handleTabClick = (id: number) => {
        setSelectedTab(id === selectedTab ? null : id);
    };

    return (
        <>
            <div className='work_menu'>
                {currentProject && (
                    <ul className='list_of_awards'>
                        {currentProject.rewards.map((reward) => (
                            <li key={reward.id}>
                                <Image src={reward.awardImg} width={40} height={40} alt={reward.title} className='awards' />
                            </li>
                        ))}
                    </ul>
                )}

                {data.map((item) => (
                    selectedTab === item.id && (
                        <ul key={item.id} className='tab_list_of_projects'>
                            {item.projects.map((project) => (
                                <li key={project.id}>
                                    <Link href={project.url} className='project_tab'>
                                        <Image src={project.thum} width={40} height={40} alt={project.name} className='project_img' />
                                        <span className='project_caption'>{project.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )
                ))}

                <ul className='work_menu_tabs'>
                    {data.map((item) => (
                        <li key={item.id} onClick={() => handleTabClick(item.id)} className={selectedTab === item.id ? 'active' : ''}>
                            <div className='work_menu_tab'>
                                <Image src={item.brandLogo} width={40} height={40} alt={item.brand} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default WorkMenu;
