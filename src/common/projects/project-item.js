import React from 'react';
import './project-item.scss';
import { Paragraphs, Label } from "Common";

export class ProjectItem extends React.Component {
    static defaultProps = {
        className: 'project',
        classNames: {
            name: 'name',
            description: "description",
            featuresContainer: "features-container",
            features: "features",
            featuresLabel: "features-label"
        },
        defaults: {
            featuresLabel: 'Features'
        }
    };

    static getKey = (item) => {
        return item.name;
    };

    render() {

        const {
            value,
            defaults,
            className,
            classNames
        } = this.props;

        const { name,
            description,
            features,
            featuresLabel
        } = { ...defaults, ...value };

        return (
            <div className={className}>
                <div className={classNames.name}>{name}</div>
                <Paragraphs value={description} className={classNames.description} />
                <div className={classNames.featuresContainer}>
                    <Label content={featuresLabel} className={classNames.featuresLabel} />
                    <Paragraphs value={features} className={classNames.features} />
                </div>
            </div>
        );
    }
}