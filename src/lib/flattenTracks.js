export default function flattenTracks(tracks) {
    let flatTracks = {};

    Object.keys(tracks).map((set) => {
        Object.keys(tracks[set]).map((cup) => {
            flatTracks = {
                ...flatTracks,
                ...tracks[set][cup],
            };
        });
    });
    return Object.values(flatTracks);
}
