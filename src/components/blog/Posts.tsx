import { getPosts } from '@/utils/utils';
import { Grid } from '@once-ui-system/core';
import Post from './Post';

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
}

export function Posts({
    range,
    columns = '1',
    thumbnail = false,
    direction
}: PostsProps) {
    let allBlogs = getPosts(['src', 'app', 'blog', 'posts']);

    const sortedBlogs = allBlogs.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedBlogs = range
        ? sortedBlogs.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedBlogs.length 
          )
        : sortedBlogs;

    return (
        <>
            {displayedBlogs.length > 0 ? (
                <Grid
                    columns={columns} mobileColumns="1"
                    fillWidth marginBottom="40" gap="12">
                    {displayedBlogs.map((post) => (
                        <Post
                            key={post.slug}
                            post={post}
                            thumbnail={thumbnail}
                            direction={direction}
                        />
                    ))}
                </Grid>
            ) : (
                <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--foreground, #fff)', fontSize: 22, opacity: 0.8 }}>
                    🚧 Our blog is brewing!<br />Fresh insights and stories are coming soon.
                </div>
            )}
        </>
    );
}